import TestAvatar from "../../assets/vu-mockup.png";

const TeamItem = () => {
  return (
    <div className="team-item">
      <img className="team-item__avatar" src={TestAvatar} />
      <div className="team-item__wrapper">
        <table>
          <tbody>
            <tr>
              <th>NAME</th>
              <th>SURNAME</th>
              <th>COMMITS</th>
              <th>LINES WROTE</th>
              <th>LINES REMOVED</th>
              <th>SOCIAL</th>
            </tr>
            <tr>
              <td>Filip</td>
              <td>Papiernik</td>
              <td>32</td>
              <td>100034</td>
              <td>7335</td>
              <td>social</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamItem;
