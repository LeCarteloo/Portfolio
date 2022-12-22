import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TeamItem = ({ color, member }) => {
  return (
    <div
      className={`team-item ${
        member.login === 'LeCarteloo' ? 'team-item--me' : ''
      }`}
      style={{
        border: member.login === 'LeCarteloo' && `solid 1px ${color}`,
      }}
    >
      <img
        className="team-item__avatar"
        src={member.avatar_url}
        alt="member-avatar"
      />
      <div className="team-item__wrapper">
        <table>
          <tbody>
            <tr>
              <th>USERNAME</th>
              <th>NAME</th>
              <th>COMMITS</th>
              <th>LINKS</th>
            </tr>
            <tr>
              <td>{member.login}</td>
              <td>-</td>
              <td>{member.contributions}</td>
              <td>
                <a
                  href={`https://github.com/${member.login}`}
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
