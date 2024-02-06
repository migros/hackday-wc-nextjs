import { FrequentlyAskedQuestions } from '@repo/ui/FrequentlyAskedQuestions';
import { Pricing } from '@repo/ui/Pricing';
import { AbcButtonSSR } from 'abc-web-components-react-wrapper';

const Page = () => (
    <main>
        <Pricing>
            <FrequentlyAskedQuestions />
        </Pricing>
        <AbcButtonSSR href="https://google.com" variant="primary" as="link">
            Button
        </AbcButtonSSR>
    </main>
);

export default Page;
