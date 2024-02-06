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
      <img
        className="card-img-top"
        src="/backgroundgraphics/mphatso.jpg"
        alt="image of person"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle">{title}</h6>
        <p className="card-text">{biography}</p>
        <a href={social} className="btn btn-primary">
          {socialType}
        </a>
      </div>
    </div>
  );
};

export default AboutCard;
