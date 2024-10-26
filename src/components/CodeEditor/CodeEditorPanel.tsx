import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import CodeEditor from "./CodeEditor"
import { SetStateAction, useState } from "react"
  
  export function CodeEditorPanel() {
    const [output, setOutput] = useState()
    const handleShowOutput = (output: SetStateAction<undefined>) => {
      setOutput(output)
    }
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={50}>
            <CodeEditor handleShowOutput={handleShowOutput}/>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">{output}</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  