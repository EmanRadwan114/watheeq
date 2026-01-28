import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import React from "react";

interface IProps {}

const LoginCompanies: React.FC<IProps> = ({}) => {
  const t = useTranslations("auth");
  const formItems = t.raw("login.form-labels.labels") as Array<{
    id: string;
    text: string;
  }>;
  return (
    <form>
      {formItems.map((item) => (
        <div key={item.id} className="flex flex-col gap-xl">
          <Label htmlFor={item.id}>{item.text}</Label>
          <Input />
        </div>
      ))}
    </form>
  );
};

export default LoginCompanies;
