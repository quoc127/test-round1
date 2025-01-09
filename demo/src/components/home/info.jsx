import { Star } from "lucide-react";
import SpainSVG from "../../assets/Icons/Spain.svg";
import AgeSVG from "../../assets/Icons/age.svg";
import HeightSVG from "../../assets/Icons/Height.svg";
import FootSVG from "../../assets/Icons/Foot.svg";
import JerseySVG from "../../assets/Icons/Jersey.svg";
import FootballSVG from "../../assets/Icons/Football.svg";

const data = {
  code: 3,
  data: {
    player: {
      id: "sybadnlqgkh8whq",
      name: "Maximo perrone",
      slug: "maximo-perrone",
      shortName: "M.Perrone",
      team: {
        id: "c9dxsq8ovz7r5s2",
        name: "Como",
        slug: "como",
        sport: {
          name: "Football",
          slug: "football",
        },
        tournament: {
          name: "Serie A",
          slug: "serie-a",
          category: {
            name: "Italy",
            slug: "italy",
            id: "70asdo2npgu7tmm",
            sport: {
              name: "Football",
              slug: "football",
            },
          },
          uniqueTournament: {
            name: "Serie A",
            slug: "serie-a",
            category: {
              name: "Italy",
              slug: "italy",
              id: "70asdo2npgu7tmm",
              sport: {
                name: "Football",
                slug: "football",
              },
            },
            id: "7au4xbkox5t97f7",
            displayInverseHomeAwayTeams: false,
          },
        },
        primaryUniqueTournament: {
          name: "Serie A",
          slug: "serie-a",
          category: {
            name: "Italy",
            slug: "italy",
            id: "70asdo2npgu7tmm",
            flag: "",
            alpha2: "",
            sport: {
              name: "Football",
              slug: "football",
            },
          },
        },
        country: {
          id: "70asdo2npgu7tmm",
          name: "Italy",
        },
      },
      position: "M",
      height: 178,
      preferredFoot: null,
      dateOfBirthTimestamp: 1041897600,
      contractUntilTimestamp: 1751212800,
      proposedMarketValue: 9000000,
      proposedMarketValueRaw: {
        value: 9000000,
        currency: "€",
      },
      nationality: {
        id: "jz5xx7no23txee9",
        name: "Argentina",
      },
    },
  },
  message: "",
};

const calculateAge = (timestamp) => {
  const birthDate = new Date(timestamp * 1000);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const general = [
  {
    title: "Nationality",
    image: SpainSVG,
    value: data.data.player.nationality.name,
  },
  {
    title: "Date of birth",
    image: AgeSVG,
    value: new Date(
      data.data.player.dateOfBirthTimestamp * 1000
    ).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    age: calculateAge(data.data.player.dateOfBirthTimestamp),
  },
  {
    title: "Height",
    image: HeightSVG,
    value: data.data.player.height,
  },
  {
    title: "Preferred foot",
    image: FootSVG,
    value: data.data.player.preferredFoot,
  },
  {
    title: "Jersey number",
    image: JerseySVG,
    value: 19,
  },
  {
    title: "Position",
    image: FootballSVG,
    value: data.data.player.position,
  },
];

export const Info = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 text-white bg-[#020c20] rounded-lg">
      <div className="p-4 grid-flow-col-1">
        <div className="flex items-center justify-end h-[24px]">
          <Star />
        </div>
        <div className="flex flex-row gap-4 items-center h-[132px]">
          <div className="w-[40px] h-[40px] md:w-[90px] md:h-[90px] rounded-full border-collapse bg-white flex items-center justify-center">
            <img src="https://img.uniscore.com/football/player/%7Bdecode(playerId)%7D/image/medium"  className="object-cover w-[30px] h-[30px]" />
          </div>
          <div className="fex flex-col">
            <p className="md:text-3xl font-medium">AIvaro Morata</p>
            <div className="flex flex-row gap-2 md:gap-4">
              <img
                src="https://img.uniscore.com/football/team/$%7Bdecode(teamId)%7D/image/small"
                // width={30}
                className="object-cover h-[30px] w-[30px]"
              />
              <div>
                <p className="text-md font-semibold">Atletico Madrid</p>
                <p className="text-sm font-normal text-[#8d8e92]">
                  Contract until 30 Jun 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {general.map((item, index) => {
          return (
            <div
              key={index}
              className={`px-4 py-2 border-t md:border-t-0 md:border-l border-gray-600 ${
                index >= general.length - 2 ? "border-b-0" : "md:border-b"
              }`}
            >
              <p className="text-[#aaaaaa]">{item.title}</p>
              <div className={`flex flex-row gap-3 items-center`}>
                <img src={item.image} width={24} height={24} />
                {item.title === "Date of birth" ? (
                  <div className="flex flex-col">
                    <span>{item.value}</span>
                    <span className="text-[#aaaaaa] text-xs font-normal">{item.age} years old</span>
                  </div>
                ) : (
                  <span className="font-bold">{item.value}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
