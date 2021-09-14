import "./statistics.scss";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  const rc = () =>
    `rgb(${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)})`;

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="item" style={{ background: rc() }} key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
