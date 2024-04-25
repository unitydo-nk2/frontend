import { useCounterStore } from "../stores/counter";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useCounterStore();
  const isLoggIn = store.getLoginStatus();
  const role = store.getRole;
  if (isLoggIn) {
    if (role === 'user' && (to.fullPath.startsWith('/ViewAllActivityPost/') || to.fullPath.startsWith('/ViewAllActivityUser/'))) {
      return navigateTo("/Error/");
    } else if ((role === 'activityOwner' || role === 'admin') && to.fullPath.startsWith('/ActivityRegistration/')) {
      return navigateTo("/Error/");
    }
  } else if (!isLoggIn) {
    if (to.fullPath.startsWith('/ViewAllActivityPost/') || to.fullPath.startsWith('/ViewAllActivityUser/') || to.fullPath.startsWith('/ActivityRegistration/')) {
      return navigateTo("/Login/");
    }
  }
  // If no redirection is needed, proceed with the navigation
  navigateTo(to.fullPath);
});
