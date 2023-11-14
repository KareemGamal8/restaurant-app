import { trans } from "@mongez/localization";
import style from "../style.module.scss";

export default function UpdateProfile() {
  return (
    <div className={style.profile_wrapper}>
      <h3 className={style.profile_title}>{trans("updateProfile")}</h3>
      <form className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex flex-col md:w-[48%] w-full ">
          <label htmlFor="firstName" className={style.profile_label}>
            {trans("firstName")}
          </label>
          <input
            className={`rounded-sm mt-[7px]  bg-white  h-[25px] w-full border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
            focus:border-[#ffc222] p-2`}
            placeholder={trans("firstName")}
            name="firstName"
            autoFocus
            id="firstName"
          />
        </div>
        <div className="flex flex-col md:w-[48%] w-full ">
          <label htmlFor="lastName" className={style.profile_label}>
            {trans("lastName")}
          </label>
          <input
            className={`rounded-sm mt-[7px]  bg-white  h-[25px] w-full border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
            focus:border-[#ffc222] p-2`}
            type="text"
            name="lastName"
            placeholder={trans("lastName")}
            id="lsatName"
          />
        </div>
        <div className="flex flex-col md:w-[48%] w-full">
          <label htmlFor="email" className={style.profile_label}>
            {trans("email")}
          </label>
          <input
            className={`rounded-sm mt-[7px]  bg-white  h-[25px] w-full border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
            focus:border-[#ffc222] p-2`}
            type="email"
            name="email"
            placeholder={trans("email")}
          />
        </div>
        <div className="flex flex-col md:w-[48%] w-full">
          <label htmlFor="phoneNumber" className={style.profile_label}>
            {trans("phoneNumber")}
          </label>
          <input
            className={`rounded-sm mt-[7px]  bg-white  h-[25px] w-full border-solid border-[#e5e5e5] border-[1px] outline-none hover:border-[#ffc222]
            focus:border-[#ffc222] p-2`}
            type="phoneNumber"
            name="phoneNumber"
            placeholder={trans("phoneNumber")}
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
