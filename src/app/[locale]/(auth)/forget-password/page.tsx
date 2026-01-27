import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AuthPhoneInput from "@/components/shared/input-label";
import AuthButton from '@/components/shared/AuthButton';

interface IProps {}

const ForgetPassword: React.FC<IProps> = ({}) => {
  return <>
 <section dir="rtl" className="min-h-screen bg-white ">
      
    
      <div className="app-container flex  items-start justify-center">
          <div className=" ">
        <Link
          href="/login"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <ArrowRight className="h-4 w-4" />
          رجوع
        </Link>
          </div>
        <div className="w-full  ">
          <h1 className="text-start text-lg font-semibold text-fourth-foreground">
            نسيت كلمة المرور
          </h1>
          <p className="mt-lg text-start text-sm  text-third-foreground">
            رقم الجوال المسجل في المنصة
          </p>

          <div className="mt-10 space-y-4">
            {/* Phone input */}
            <AuthPhoneInput label="رقم الجوال" />

            {/* Button */}
            <AuthButton label="التالي" text="التالي" />
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default ForgetPassword;
