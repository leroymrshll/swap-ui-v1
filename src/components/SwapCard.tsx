import { SelectGroup } from "@radix-ui/react-select";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const SwapCard = () => {
  return (
    <Tabs defaultValue="swap">
      <TabsContent value="swap">
        <div className="p-2 w-[600px] h-[500px] border border-white rounded-xl flex justify-center items-center flex-col gap-3">
        <TabsList>
          <TabsTrigger value="swap">Swap</TabsTrigger>
          <TabsTrigger value="crosschain">Cross Chain</TabsTrigger>
        </TabsList>

      {/* Input "FROM" */}

      <div id="input-from" 
      className="
      w-[98%] h-[150px] 
      grid grid-cols-3 border border-white px-4 rounded-xl
      ">
        <div className="col-span-2 flex flex-col justify-center">
          <p>From</p>
          <Input className="w-[90%] h-[80px] text-4xl" placeholder="0.0"/>
          <p>$ 0.0</p>
        </div>
        <div className=" flex justify-center items-center">
          <Select>
            <SelectTrigger className="h-[50px]">
              <SelectValue placeholder="Select a token" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="BTC">Bitcoin</SelectItem>
                <SelectItem value="ETH">Ethereum</SelectItem>
                <SelectItem value="SOL">Solana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Input "TO" */}

      <div id="input-to" 
      className="
      w-[98%] h-[150px] 
      grid grid-cols-3 border border-white px-4 rounded-xl
      ">
        <div className="col-span-2 flex flex-col justify-center">
          <p>To</p>
          <Input className="w-[90%] h-[80px] text-4xl" placeholder="0.0"/>
          <p>$ 0.0</p>
        </div>
        <div className=" flex justify-center items-center">
          <Select>
            <SelectTrigger className="h-[50px]">
              <SelectValue placeholder="Select a token" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="BTC">Bitcoin</SelectItem>
                <SelectItem value="ETH">Ethereum</SelectItem>
                <SelectItem value="SOL">Solana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-[98%] h-[50px] text-xl">
        <h1>Swap</h1>
      </Button>
      </div>
      </TabsContent>

      <TabsContent value="crosschain">
        <div className="p-2 w-[600px] h-[500px] border border-white rounded-xl flex justify-center items-center flex-col gap-3">
        <TabsList>
          <TabsTrigger value="swap">Swap</TabsTrigger>
          <TabsTrigger value="crosschain">Cross Chain</TabsTrigger>
        </TabsList>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default SwapCard