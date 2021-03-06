import { EventRecordType } from "@common/types"
import { Text, View } from "react-native"
import { useTailwind } from "tailwind-rn/dist"
import RecordLine from "../atoms/RecordLine"
import TotalVolumeLine from "../atoms/TotalVolumeLine"

const RecordContainer: React.FC<Props> = ({eventRecord}) => { 
  const tailwind = useTailwind()

  return (
    <View style={tailwind('w-80 p-6 mb-8 rounded-3xl bg-transp-gray')}>
      <Text style={tailwind('mb-2 text-white text-lg')}>{eventRecord?.event.name}</Text>
      { eventRecord?.trainingSets?.map ((trainingSet, i) => {
        return <RecordLine key={`trainingSet${trainingSet.id}`} trainingSet={trainingSet} number={i+1}/>
      })}
      <TotalVolumeLine volume={eventRecord?.volume}/>
    </View>
  )
}

type Props = {
  eventRecord?: EventRecordType
}

export default RecordContainer