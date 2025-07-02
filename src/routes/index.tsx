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
      <ExampleAccordion />
      <ExampleAlertDialog />
      <ExampleAvatar />
      <ExampleCheckbox />
      <ExampleCheckboxGroup />
      <ExampleCollapsible />
      <ExampleContextMenu />
      <ExampleDialog />
      <ExampleField />
      <ExampleFieldset />
      <ExampleForm />
      <ExampleInput />
      <ExampleMenu />
      <ExampleMenubar />
      <ExampleMeter />
      <ExampleNavigationMenu />
      <ExampleNumberField />
      <ExamplePopover />
      <ExamplePreviewCard />
      <ExampleProgress />
      <ExampleRadioGroup />
      <ExampleScrollArea />
      <ExampleSelect />
      <ExampleSeparator />
      <ExampleSlider />
      <ExampleSwitch />
      <ExampleTabs />
      <ExampleToast />
      <ExampleToggleGroup />
      <ExampleToggle />
      <ExampleToolbar />
      <ExampleTooltip />
    </div>
  );
}
