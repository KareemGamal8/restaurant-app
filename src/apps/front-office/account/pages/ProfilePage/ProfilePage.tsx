import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

export default function ProfilePage() {
  return (
    <div className="container">
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-[2rem]">{trans("myDashboard")}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 font-bold text-sm">
            <span>{trans("hello")}, Kareem Gamal</span>
            <div>
              ({trans("not")} Kareem Gamal?
              <Link to={URLS.auth.login} className="text-red-600 ps-1">
                {trans("signIn")}
              </Link>
              )
            </div>
          </div>
          <div>
            {trans("accountDashboard")}
            <Link
              to={URLS.account.changePassword}
              className="text-red-600 px-1">
              {trans("editYourPassword")}
            </Link>
            {trans("and")}
            <Link to={URLS.account.updateProfile} className="text-red-600 px-1">
              {trans("accountDetails")}
            </Link>
            .
          </div>
        </div>
        <div>
          <h3 className="font-bold text-base">{trans("myAddresses")}</h3>
          <p>{trans("followingAddresses")}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-col md:w-[50%] w-100% justify-start">
            <h3 className="font-bold text-base">{trans("billingAddress")}</h3>
            <span>Kareem Gamal</span>
            <span>Green Street</span>
            <span>Luxor, Egypt</span>
            <span>EGY</span>
            <button className="rounded-[5rem] bg-gray-100 text-black px-6 py-1 h-[fit-content] font-semibold w-[fit-content]">
              {trans("edit")}
            </button>
          </div>
          <div className="flex gap-2 flex-col md:w-[50%] w-100% justify-start">
            <h3 className="font-bold text-base">{trans("shippingAddress")}</h3>
            <span>Kareem Gamal</span>
            <span>Green Street</span>
            <span>Luxor, Egypt</span>
            <span>EGY</span>
            <button className="rounded-[5rem] bg-gray-100 text-black px-6 py-1 h-[fit-content] font-semibold w-[fit-content]">
              {trans("edit")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
