interface AboutCardProps {
  name: string;
  title: string;
  biography: string;
  social: string;
  socialType: string;
}

const AboutCard = ({
  name,
  title,
  biography,
  social,
  socialType,
}: AboutCardProps) => {

  const word = title + social + socialType;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="/backgroundgraphics/mphatso.jpg"
        alt="image of person"
      />
      {word}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{biography}</p>
      </div>
    </div>
  );
};

export default AboutCard;
