import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";

const TeamItem = ({ color, member }) => {
  let additions = 0;
  let deletions = 0;

  for (const week of member.weeks) {
    additions += week.a;
    deletions += week.d;
  }

  return (
    <div
      className="team-item"
      style={{
        border: member.author.login === "LeCarteloo" && `solid 1px ${color}`,
      }}
    >
      <img className="team-item__avatar" src={member.author.avatar_url} />
      <div className="team-item__wrapper">
        <table>
          <tbody>
            <tr>
              <th>USERNAME {member.author.login === "LeCarteloo" && "(me)"}</th>
              <th>NAME</th>
              <th>COMMITS</th>
              <th>ADDITIONS</th>
              <th>DELETIONS</th>
              <th>LINKS</th>
            </tr>
            <tr>
              <td>{member.author.login}</td>
              <td>-</td>
              <td>{member.total}</td>
              <td>{additions}</td>
              <td>{deletions}</td>
              <td>
                <a
                  href={`https://github.com/${member.author.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-item__link"
                >
                  <FaGithub />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

TeamItem.propTypes = {
  theme: PropTypes.string,
  member: PropTypes.object,
};

export default TeamItem;
