import { useRoute } from "vue-router";
import { computed } from "vue";

const useCurrentPage = () => {
  const route = useRoute();
  return computed(() => {
    const page = route.query.page;
    return Number.parseInt(page || "1")
  });
};

export default useCurrentPage;
