"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut as logout,
  type User,
  type AuthProvider,
  linkWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink as signInWithMagicLink,
} from "firebase/auth";
import { auth, githubProvider, googleProvider } from "@/app/firebase";
import { toast } from "sonner";
import type { FirebaseError } from "firebase/app";

type AuthProviderContext = {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  sendSignInLink: (email: string) => Promise<void>;
  signInWithEmailLink: (email: string, link: string) => Promise<void>;
  signOut: () => Promise<void>;
  linkAccount: (provider: AuthProvider) => Promise<void>;
};

const AuthContext = createContext<AuthProviderContext | null>(null);

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const handleAuthError = useCallback((error: FirebaseError) => {
    if (error.code === "auth/account-exists-with-different-credential") {
      toast.error(
        "An account already exists with the same email address but different sign-in credentials. Please sign in with the correct provider."
      );
    } else {
      toast.error(error.message);
    }
  }, []);

  const linkAccount = useCallback(
    async (provider: AuthProvider) => {
      try {
        await linkWithPopup(auth.currentUser!, provider);
        toast.success("Successfully linked account");
      } catch (error) {
        console.error("Error during linking account:", error);
        handleAuthError(error as FirebaseError);
      }
    },
    [handleAuthError]
  );

  const signInWithGoogle = useCallback(async () => {
    googleProvider.addScope("profile");
    googleProvider.addScope("email");
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Successfully signed in with Google");
    } catch (error) {
      console.error("Error during sign in with Google:", error);
      handleAuthError(error as FirebaseError);
    }
  }, [handleAuthError]);

  const signInWithGithub = useCallback(async () => {
    githubProvider.addScope("user");
    try {
      await signInWithPopup(auth, githubProvider);
      toast.success("Successfully signed in with GitHub");
    } catch (error) {
      console.error("Error during sign in with GitHub:", error);
      handleAuthError(error as FirebaseError);
    }
  }, [handleAuthError]);

  const sendSignInLink = useCallback(
    async (email: string) => {
      const actionCodeSettings = {
        url: `${window.location.origin}/my-account`,
        handleCodeInApp: true,
      };
      try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        toast.success("Magic link sent to your email");
        window.localStorage.setItem("emailForSignIn", email);
      } catch (error) {
        console.error("Error sending sign-in link:", error);
        handleAuthError(error as FirebaseError);
      }
    },
    [handleAuthError]
  );

  const signInWithEmailLink = useCallback(
    async (email: string, link: string) => {
      try {
        if (isSignInWithEmailLink(auth, link)) {
          await signInWithMagicLink(auth, email, link);
          toast.success("Successfully signed in with email link");
        }
      } catch (error) {
        console.error("Error during sign in with email link:", error);
        handleAuthError(error as FirebaseError);
      }
    },
    [handleAuthError]
  );

  const signOut = useCallback(async () => {
    try {
      await logout(auth);
      toast.success("Successfully signed out");
    } catch (error) {
      console.error("Error during logout:", error);
      handleAuthError(error as FirebaseError);
    }
  }, [handleAuthError]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        const token = await user.getIdToken();
        sessionStorage.setItem("token", token);
      } else {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
      }
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const values = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    sendSignInLink,
    signInWithEmailLink,
    signOut,
    linkAccount,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthProviderContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};