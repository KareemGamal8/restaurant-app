import LoginPage from "apps/front-office/account/pages/LoginPage";
import URLS from "apps/front-office/utils/urls";
import { accountRoutes, reverseGuardedRoutes } from "../utils/router";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import UpdateProfile from "./pages/UpdateProfile";

reverseGuardedRoutes([
  {
    path: URLS.auth.register,
    component: Register,
  },
  {
    path: URLS.auth.login,
    component: LoginPage,
  },
]);

accountRoutes([
  {
    path: URLS.account.profile,
    component: ProfilePage,
  },
  {
    path: URLS.account.updateProfile,
    component: UpdateProfile,
  },
  {
    path: URLS.account.changePassword,
    component: ChangePasswordPage,
  },
]);
