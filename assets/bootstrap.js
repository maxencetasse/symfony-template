import { startStimulusApp } from '@symfony/stimulus-bridge';

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    true,
    /\.[jt]sx?$/
));
