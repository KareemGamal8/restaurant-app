import { trans } from "@mongez/localization";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getMeals } from "apps/front-office/menu/services/meals-service";
import { useEffect, useState } from "react";

export default function useSearchMeals(searchInput, isSearchOpened) {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (isSearchOpened) {
      getMeals()
        .then(response => {
          setMeals(response.data.meals);
        })
        .catch(error => {
          setError(
            error.response?.data?.error ||
              error.message ||
              trans("somethingWentWrong"),
          );
        });
    }
  }, [isSearchOpened, searchInput]);
  const filteredMeals = () =>
    searchInput.trim() !== ""
      ? meals.filter(meal =>
          meal.name.toLowerCase().includes(searchInput.toLowerCase()),
        )
      : null;

  return { meals: filteredMeals, error };
}
