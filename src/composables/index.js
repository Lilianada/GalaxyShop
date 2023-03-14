import { ref, watchEffect } from "vue";
import { getAuth } from "firebase/auth";

export function useCurrentUser() {
  const auth = getAuth();
  const user = ref(auth.currentUser);

  const unsubscribe = auth.onAuthStateChanged((newUser) => {
    user.value = newUser;
  });

  watchEffect(() => {
    if (!auth.currentUser && user.value !== null) {
      user.value = null;
    }
  });

  const logout = async () => {
    try {
      await auth.signOut();
      user.value = null;
    } catch (error) {
      console.error(error);
    }
  };

  return { user, logout, unsubscribe };
}
