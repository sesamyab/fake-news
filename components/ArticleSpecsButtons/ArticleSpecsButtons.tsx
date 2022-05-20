import React from 'react';
import styles from './ArticleSpecsButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart, faVolumeUp, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import numberFormatter from '../../utils/numberFormatter';
import readingSpeed from '../../utils/readingSpeed';
interface Props {
    content: string;
}

const ArticleSpecsButtons: React.FC<Props> = ({ content }) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonList}>
                <p className={styles.button}>
                    <FontAwesomeIcon icon={faClock} className={styles.icon} />
                    LÄSTID {numberFormatter(readingSpeed(content))} min
                </p>
                <p className={styles.button}>
                    <FontAwesomeIcon icon={faVolumeUp} className={styles.icon} />
                    SKÄRMLÄSARVÄNLIG
                </p>
                <p className={styles.button}>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                    STÖD KVARTAL
                </p>
                <p className={styles.button}>
                    <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
                    NYHETSBREV
                </p>
            </div>
        </div>
    );
};

export default ArticleSpecsButtons;
