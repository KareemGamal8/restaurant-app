import { trans } from "@mongez/localization";
import { Link, currentRoute } from "@mongez/react-router";
import {
  IconDashboard,
  IconEdit,
  IconLock,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import BaseLayout from "apps/front-office/design-system/layouts/BaseLayout";
import URLS from "apps/front-office/utils/urls";
import style from "./style.module.scss";

export type AccountLayoutProps = {
  children: React.ReactNode;
};
export default function AccountLayout(props: AccountLayoutProps) {
  const route = currentRoute();

  return (
    <BaseLayout>
      <div className={style.account_wrapper}>
        <div className="container">
          <div className="flex md:flex-row flex-col gap-8">
            <aside className="w-full md:w-[20%]">
              <div className={style.sidebar_user_details}>
                <IconUserCircle size={40} />
                <div>
                  <span className={style.user_name}>Kareem Gamal</span>
                  <span className={style.user_email}>kareem@gmail.com</span>
                </div>
              </div>
              <div
                className={
                  route === URLS.account.profile
                    ? style.active_link
                    : style.inactive_link
                }>
                <IconDashboard />
                <Link to={URLS.account.profile}>{trans("dashboard")}</Link>
              </div>
              <div
                className={
                  route === URLS.account.updateProfile
                    ? style.active_link
                    : style.inactive_link
                }>
                <IconEdit />
                <Link to={URLS.account.updateProfile}>
                  {trans("updateProfile")}
                </Link>
              </div>
              <div
                className={
                  route === URLS.account.changePassword
                    ? style.active_link
                    : style.inactive_link
                }>
                <IconLock />
                <Link to={URLS.account.changePassword}>
                  {trans("changePassword")}
                </Link>
              </div>
              <div className={style.profile_logout}>
                <IconLogout />
                <button>{trans("logout")}</button>
              </div>
            </aside>
            <section className="w-full md:w-[80%]">{props.children}</section>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
