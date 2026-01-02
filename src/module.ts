import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
          { value: 'lg', label: 'Large' },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    })
    .addColorPicker({
      path: 'accentColor',
      name: 'Accent color',
      description: 'Color of the main shape',
      defaultValue: '#3b82f6',
    })
    .addRadio({
      path: 'shape',
      name: 'Shape',
      defaultValue: 'circle',
      settings: {
        options: [
          { value: 'circle', label: 'Circle' },
          { value: 'square', label: 'Square' },
        ],
      },
    });
});

