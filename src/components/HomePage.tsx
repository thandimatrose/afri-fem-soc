import { ReactNode } from "react";

interface HomePage {
  children: ReactNode;
}

const HomePage = () => {
  return (
    <>
      <h2 className="welcome-txt">Welcome</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque
        eveniet exercitationem amet repellat? Dolor similique ipsam minima ea
        quia, inventore natus molestiae hic molestias eligendi enim iusto
        officia veritatis atque incidunt consequuntur asperiores deleniti minus
        maxime. Pariatur esse numquam itaque qui voluptatibus odio incidunt
        tempora eveniet necessitatibus quaerat? Cumque laboriosam laborum eos
        quis cum earum eveniet exercitationem expedita labore voluptatem ipsa
        commodi voluptates fugit, repudiandae quisquam, sed aperiam dolorem.
      </p>{" "}
      <p>
        Quibusdam, quia laboriosam. Eveniet distinctio repudiandae suscipit ad
        ratione voluptatem cupiditate odit, necessitatibus, rem porro magnam
        veniam? Delectus temporibus vel nam quod.
      </p>
    </>
  );
};

export default HomePage;
