import { Option } from '@/types/global.types';
import { SelectComponent } from '../common/select/SelectComponent';
import MonacoEditor from './MonacoEditor';
import { useState } from 'react';
import { Button } from '../ui/button';
import { StepForward } from 'lucide-react';
const options: Option[] = [
    { label: "Cobalt", value: "cobalt" }
]
const CodeEditor = ({ handleShowOutput }: any) => {
    console.log("🚀 ~ CodeEditor ~ handleShowOutput:", handleShowOutput)
    const [theme, setTheme] = useState('');
    const [code, setCode] = useState();
    const [output, setOutput] = useState()
    console.log("🚀 ~ CodeEditor ~ output:", output)
    const handleChangeOption = (option) => {
        console.log("🚀 ~ handleChangeOption ~ option:", option)
        setTheme(option.value)
    }
    const handleEditorChange = (code) => {
        setCode(code)
    }
    const executeCode = () => {
        console.log('GGGGGGGGGG');

        // Capture output from console.log statements
        let outputLog = '';
        const originalLog = console.log;
        console.log = (...args) => {
            outputLog += args.join(' ') + '\n';
        };

        try {
            const result = new Function(code)();
            console.log("🚀 ~ executeCode ~ result:", result)
            // If there's no console.log output, set the function result as output
            setOutput(outputLog || (result !== undefined ? String(result) : 'Code executed successfully'));
        } catch (error) {
            setOutput('Error: ' + error.message);
        } finally {
            // Restore console.log to avoid affecting other logs in the app
            console.log = originalLog;
        }
    };
    return <div className='h-[90vh]'>
        <div className='flex justify-end gap-4 bg-neutral-800 p-3'>
            <SelectComponent handleChangeOption={handleChangeOption} selectedOption={theme} placeholder='Select theme' options={options} />
            <Button variant="outline" onClick={executeCode}>
                {
                    // <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                }
                 <StepForward />
            </Button>
        </div>
        <MonacoEditor code={code} language={''} theme='' handleEditorChange={handleEditorChange} />
        <div>header</div>
    </div>
}

export default CodeEditor
