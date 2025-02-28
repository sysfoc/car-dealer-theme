import AccountInfo from "@/app/ui/Dashboard/Account/AccountInfo";
// import AccountSetting from "@/app/ui/Dashboard/Account/AccountSetting";

export default function AccountPage (){

    return (
        <section className="h-full w-full pl-7">
            {/* Profile Info to display */}
            <AccountInfo/>
            {/* Profile Info setting */}
            {/* <AccountSetting /> */}
        </section>
    )
}