import data from "../../data.json";
import ImeSlika from "../ImeSlika/ImeSlika";
import Obrazovanje from "../Obrazovanje/Obrazovanje";
import Podaci from "../Podaci/Podaci";
import RadnoIskustvo from "../RadnoIskustvo/RadnoIskustvo";
import Sposobnosti from "../Sposobnosti/Sposobnosti";

const Zivotopis = () => {
  return (
    <>
      <ImeSlika {...data.personalInformation} />
      <Podaci {...data.personalInformation} />
      <Sposobnosti {...data.skills} />
      <RadnoIskustvo jobs={data.workExperience} />
      <Obrazovanje schools={data.education} />
    </>
  );
};

export default Zivotopis;
