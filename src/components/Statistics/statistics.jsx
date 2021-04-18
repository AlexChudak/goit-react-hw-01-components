import PropTypes from 'prop-types';


const Statistic = ({ title, stats }) => {
    return <section class="statistics">  
        {title && <h2 class="title">Upload stats</h2>}

        <ul class="stat-list">
            {stats.map((stat) =><li key={stat.id} class="item">
                <span class="label">{stat.label}</span>
                <span class="percentage">{stat.percentage}</span>
            </li>)}





            
            
        </ul>
    </section>
};


Statistic.propTypes = {
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number.isRequired,
 }





export default Statistic;