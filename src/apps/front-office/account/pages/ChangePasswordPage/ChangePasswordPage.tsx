import { trans } from "@mongez/localization";
import style from "../style.module.scss";

export default function ChangePasswordPage() {
  return (
    <div className={style.profile_wrapper}>
      <h3 className={style.profile_title}>{trans("changePassword")}</h3>
      <form className={style.change_password_form}>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="currentPassword" className={style.profile_label}>
            {trans("currentPassword")}
          </label>
          <input
            type="password"
            placeholder={trans("currentPassword")}
            className={`rounded-sm mt-[7px]  bg-white  h-[25px] w-full border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
            focus:border-[#ffc222] p-2`}
            name="currentPassword"
            id="currentPassword"
            required
            autoFocus
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="newPassword" className={style.profile_label}>
            {trans("newPassword")}
          </label>
          <input
            type="password"
            placeholder={trans("newPassword")}
            name="password"
            id="newPassword"
            className={`rounded-sm mt-[7px]  bg-white  h-[25px] w-full border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
            focus:border-[#ffc222] p-2`}
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="confirmPassword" className={style.profile_label}>
            {trans("confirmPassword")}
          </label>
          <input
            type="password"
            className={`rounded-sm mt-[7px]  bg-white  h-[25px] w-full border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
            focus:border-[#ffc222] p-2`}
            placeholder={trans("confirmPassword")}
            id="confirmPassword"
          />
        </div>
        <button
          type="submit"
          className="bg-[#079447] h-10 md:w-[50%] w-full text-white font-bold">
          {trans("updateInformation")}
        </button>
      </form>
    </div>
  );
}
