import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia eligendi id praesentium, vero neque saepe hic nesciunt delectus sed eius. Ipsum dicta modi alias labore cupiditate iure, repudiandae provident molestiae, voluptatibus corrupti numquam est culpa accusamus voluptate magnam dignissimos pariatur fugit in quasi. Velit architecto, magni iste error nostrum enim at impedit. Optio ex saepe, veniam ab accusantium earum placeat quaerat cumque accusamus consequuntur praesentium repellat tempore atque vitae error delectus est molestias dolor, culpa doloremque. Quia modi impedit nesciunt maxime ex distinctio, optio deserunt odit atque corporis corrupti nulla quidem, ipsum laudantium ut illo commodi numquam sit labore!</p>

      <div className="flex justify-center my-8">
        <Link href='/tickets'>
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo minus error. Aspernatur dignissimos molestias itaque iure fugiat rem reiciendis. Ab aliquam eligendi officia incidunt ipsam. Sequi suscipit consequatur blanditiis!</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  );
}
