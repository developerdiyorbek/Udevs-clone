import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import SectionHeader from "./SectionHeader";
import { toolsBtns, toolsInformation } from "@/constants/tools";
import ToolsCard from "./toolsCard";

function Tools() {
  return (
    <section className="bg-[#f4f7ff] py-8 lg:py-20">
      <div className="max-w-6xl mx-auto w-full px-4">
        <SectionHeader title="Tools" />
        <RadioGroup>
          <div className="flex items-center flex-wrap">
            {toolsBtns.map((item) => (
              <FormControlLabel
                value={item.title}
                key={item.id}
                className="font-semibold"
                control={<Radio />}
                label={item.title}
              />
            ))}
          </div>
        </RadioGroup>
        <div className="grid grid-cols-5 lg:grid-cols-12 mt-5 lg:mt-10 gap-3">
          {toolsInformation.map((item) => (
            <ToolsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
