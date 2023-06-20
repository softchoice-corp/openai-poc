import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Please list 8 impressive facts about Skunk Works",
        value: "Please list 8 impressive facts about Skunk Works"
    },
    { text: "Can you list 5 aircraft developed by Skunk Works and provide a few sentences describing each one?", value: "Can you list 5 aircraft developed by Skunk Works and provide a few sentences describing each one?" },
    { text: "What is the maximum speed and service ceiling of the SR-71 Blackbird?", value: "What is the maximum speed and service ceiling of the SR-71 Blackbird?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
