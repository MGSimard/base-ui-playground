import { createFileRoute } from "@tanstack/react-router";
import ExampleAccordion from "@/_components/base-ui/accordion";
import ExampleAvatar from "@/_components/base-ui/avatar";
import ExampleCheckbox from "@/_components/base-ui/checkbox";
import ExampleCheckboxGroup from "@/_components/base-ui/checkbox-group";
import ExampleCollapsible from "@/_components/base-ui/collapsible";
import ExampleAlertDialog from "@/_components/base-ui/alert-dialog";
import ExampleContextMenu from "@/_components/base-ui/context-menu";
import ExampleDialog from "@/_components/base-ui/dialog";
import ExampleField from "@/_components/base-ui/field";
import ExampleFieldset from "@/_components/base-ui/fieldset";
import ExampleForm from "@/_components/base-ui/form";
import ExampleInput from "@/_components/base-ui/input";
import ExampleMenu from "@/_components/base-ui/menu";
import ExampleMenubar from "@/_components/base-ui/menubar";
import ExampleMeter from "@/_components/base-ui/meter";
import ExampleNavigationMenu from "@/_components/base-ui/navigation-menu";
import ExampleNumberField from "@/_components/base-ui/number-field";
import ExamplePopover from "@/_components/base-ui/popover";
import ExamplePreviewCard from "@/_components/base-ui/preview-card";
import ExampleProgress from "@/_components/base-ui/progress";
import ExampleSelect from "@/_components/base-ui/select";
import ExampleSeparator from "@/_components/base-ui/separator";
import ExampleScrollArea from "@/_components/base-ui/scroll-area";
import ExampleTabs from "@/_components/base-ui/tabs";
import ExampleSlider from "@/_components/base-ui/slider";
import ExampleSwitch from "@/_components/base-ui/switch";
import ExampleToggle from "@/_components/base-ui/toggle";
import ExampleRadioGroup from "@/_components/base-ui/radio";
import ExampleToast from "@/_components/base-ui/toast";
import ExampleToggleGroup from "@/_components/base-ui/toggle-group";
import ExampleToolbar from "@/_components/base-ui/toolbar";
import ExampleTooltip from "@/_components/base-ui/tooltip";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <section>
        <h2>Accordion</h2>
        <ExampleAccordion />
      </section>

      <section>
        <h2>Alert Dialog</h2>
        <ExampleAlertDialog />
      </section>

      <section>
        <h2>Avatar</h2>
        <ExampleAvatar />
      </section>

      <section>
        <h2>Checkbox</h2>
        <ExampleCheckbox />
      </section>

      <section>
        <h2>Checkbox Group</h2>
        <ExampleCheckboxGroup />
      </section>

      <section>
        <h2>Collapsible</h2>
        <ExampleCollapsible />
      </section>

      <section>
        <h2>Context Menu</h2>
        <ExampleContextMenu />
      </section>

      <section>
        <h2>Dialog</h2>
        <ExampleDialog />
      </section>

      <section>
        <h2>Field</h2>
        <ExampleField />
      </section>

      <section>
        <h2>Fieldset</h2>
        <ExampleFieldset />
      </section>

      <section>
        <h2>Form</h2>
        <ExampleForm />
      </section>

      <section>
        <h2>Input</h2>
        <ExampleInput />
      </section>

      <section>
        <h2>Menu</h2>
        <ExampleMenu />
      </section>

      <section>
        <h2>Menubar</h2>
        <ExampleMenubar />
      </section>

      <section>
        <h2>Meter</h2>
        <ExampleMeter />
      </section>

      <section>
        <h2>Navigation Menu</h2>
        <ExampleNavigationMenu />
      </section>

      <section>
        <h2>Number Field</h2>
        <ExampleNumberField />
      </section>

      <section>
        <h2>Popover</h2>
        <ExamplePopover />
      </section>

      <section>
        <h2>Preview Card</h2>
        <ExamplePreviewCard />
      </section>

      <section>
        <h2>Progress</h2>
        <ExampleProgress />
      </section>

      <section>
        <h2>Select</h2>
        <ExampleSelect />
      </section>

      <section>
        <h2>Separator</h2>
        <ExampleSeparator />
      </section>

      <section>
        <h2>Scroll Area</h2>
        <ExampleScrollArea />
      </section>

      <section>
        <h2>Tabs</h2>
        <ExampleTabs />
      </section>

      <section>
        <h2>Slider</h2>
        <ExampleSlider />
      </section>

      <section>
        <h2>Switch</h2>
        <ExampleSwitch />
      </section>

      <section>
        <h2>Toggle Group</h2>
        <ExampleToggleGroup />
      </section>

      <section>
        <h2>Toggle</h2>
        <ExampleToggle />
      </section>

      <section>
        <h2>Radio Group</h2>
        <ExampleRadioGroup />
      </section>

      <section>
        <h2>Toast</h2>
        <ExampleToast />
      </section>

      <section>
        <h2>Toolbar</h2>
        <ExampleToolbar />
      </section>

      <section>
        <h2>Tooltip</h2>
        <ExampleTooltip />
      </section>
    </div>
  );
}
