import PropTypes from 'prop-types';

import styles from './section.module.css';

function Section({ title, children }) {
    console.log(title);
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </section>)
};

export default Section;

Section.defaultProps = {
    title: '',
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};


