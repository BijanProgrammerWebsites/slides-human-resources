import {RevealService} from './services/reveal.service.ts';

const main = async (): Promise<void> => {
    const revealService = new RevealService();
    revealService.start();
};

main().then();
