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

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default AboutCard;
