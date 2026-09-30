export function CrewDetails({ member }) {
  return (
    <article className="crew-details">
      <p className="eyebrow">{member.role}</p>
      <h2>{member.name}</h2>
      <p className="body-copy">{member.bio}</p>
    </article>
  );
}
