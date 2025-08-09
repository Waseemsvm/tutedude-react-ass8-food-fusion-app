import TeamCardStyles from "../styles/Main.module.css";

export default function TeamCard({ img, name, designation }) {
  return (
    <div className={TeamCardStyles.teamcard}>
      <img src={img} alt="" />
      <p>{name}</p>
      <p>{designation}</p>
    </div>
  );
}
