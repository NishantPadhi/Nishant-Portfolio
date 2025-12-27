
import Seo from '../components/common/Seo';
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="mt-20">
      <Seo title="Home | Nishant Padhi | Senior Frontend Engineer" />
      <h2 className="text-4xl font-bold">{t("homeHeadline")}</h2>
      <div className="mt-4 max-w-3/4 text-justify">
        <p>{t("home1")}</p>
        <p className="mt-4">{t("home2")}</p>
        <p className="mt-4">{t("home3")}</p>
        <p className="mt-4">{t("home4")}</p>
        <p className="mt-4">{t("home5")}</p>
        ...
      </div>
    </section>
  )
}
