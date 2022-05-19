import React from 'react';
import styles from './ArticleSpecsButtons.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faHeart,
    faVolumeUp,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import numberFormatter from '../../utils/numberFormatter';
import readingSpeed from '../../utils/readingSpeed';
interface Props {
    content: string;
}

const ArticleSpecsButtons: React.FC<Props> = ({ content, }) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonList}>
                <p className={styles.button}>
                        <FontAwesomeIcon  
                            icon={faClock}
                            style={{ fontSize: 12, color: "#a56687",marginRight:'9px' }}
                        />
                        LÄSTID {numberFormatter(readingSpeed(content))} min
                </p>
                <p className={styles.button}>
                <FontAwesomeIcon  
                    icon={faVolumeUp}
                    style={{ fontSize: 12, color: "#a56687",marginRight:'9px' }}
                />
                SKÄRMLÄSARVÄNLIG
                </p>
                <p className={styles.button}>
                    <FontAwesomeIcon  
                        icon={faHeart}
                        style={{ fontSize: 12, color: "#a56687",marginRight:'9px' }}
                    />
                    STÖD KVARTAL
                </p>
                <p className={styles.button}>
                    <FontAwesomeIcon  
                        icon={faPaperPlane}
                        style={{ fontSize: 12, color:"#a56687",marginRight:'9px' }}
                    />
                    NYHETSBREV
                </p>
            </div>
        </div>
    );
}

export default ArticleSpecsButtons;