import TeamCardStyles from "../styles/Main.module.css";

export default function TeamCard({ img, name, designation }) {
  return (
    <div className={TeamCardStyles.teamcard}>
      <img src={img} alt="" className={TeamCardStyles.img} />
      <p className={TeamCardStyles.name}>{name}</p>
      <p className={TeamCardStyles.designation}>{designation}</p>
    </div>
  );
}
