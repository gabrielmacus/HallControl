import { Button, Slider } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../common/components/MainLayout';
import useMeetingControlAPI, { Preset } from './useMeetingControlAPI';
import { AudioMutedOutlined, AudioOutlined,VideoCameraOutlined } from '@ant-design/icons';



const PresetsGroup = styled.div`

display: grid;
grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
//grid-auto-rows: 100px;
grid-gap: 1rem;

`;
const PresetsGroupTitle = styled.div`

font-weight: 600;
text-align: center;
margin-bottom: 1rem;
font-size: 1.2rem;
`;
const PresetsGroupContainer = styled.div`

padding: 1.5rem;
height: 100%;
border-radius: 5px;
 background: #eeeeee;
box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
display:inline-block;
overflow-y: auto;
&:not(:last-child)
{
margin-right:1rem;
}
`;
const PresetButton = styled.div<{active:boolean}>`
background: #eeeeee;
font-weight: 600;
font-size: 1rem;
justify-content: center;
display: flex;
align-items: center;
box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
background: ${props => props.active ? "#3949ab" : "white"};
color: ${props => props.active ? "white" : "black"};
cursor:pointer;
padding: 0.5rem;
`;

const BusGroupContainer = styled.div``;
const BusGroupTitle = styled.div`
font-size: 1.5rem;
margin-bottom: 0.5rem;
border-bottom: 1px solid;
padding-bottom: 0.5rem;
margin-bottom: 1rem;
color: #616161;
`;
const BusGroup = styled.div`
display: grid;
gap: 0.5rem;
grid-auto-rows: 1fr;
`
const BusTitle = styled.div`
padding: 1rem;
height: 100%;
background: #e0e0e0;
color: black;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;
const Bus = styled.div`
background: #424242;
color: white;
font-weight: 600;
display: grid;
//grid-template-columns: 150px 1fr;
align-items: center;

`;

const BusControl = styled.div`
height: 100%;
align-items: center;
padding-right: 1rem;
padding-left: 1.5rem;
display: grid;
//grid-template-columns: 1fr 140px 140px;
grid-gap: 0.5rem;
`;

const SliderContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const StyledSlider = styled(Slider)`
margin: 0;
height: 35vh;
margin-top: 1rem;
margin-bottom: 1rem;
`;

const Container = styled.div`
overflow-x: auto;
width: 100%;
height:100%;
white-space: nowrap;
padding:1rem;
`;


function MeetingControlPage() {
    const meetingControlApi = useMeetingControlAPI();
    const [presets, setPresets] = useState<Preset[]>([]);
    const [activePreset, setActivePreset] = useState<Preset>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        meetingControlApi.read().then(setPresets);
    },[]);

    const getPresetsGroups = () => {
        const presetsGroups: { [key: string]: Preset[] } = {};
        const presetsGroupsArray = [];

        for (const preset of presets) {
            if (!presetsGroups[preset.tag]) {
                presetsGroups[preset.tag] = [preset];
            }
            else {
                presetsGroups[preset.tag].push(preset)
            }
        }

        for (const group in presetsGroups) {
            presetsGroupsArray.push(presetsGroups[group]);
        }

        console.log(presetsGroupsArray)

        return presetsGroupsArray;
    };

    const activatePreset = async (preset: Preset) => {
        setActivePreset(preset);
        setLoading(true);
        await meetingControlApi.setPreset(preset);
        setLoading(false);
    }

    return (
        <MainLayout>
            <Container>

                {/*
                 <BusGroupContainer>
                    <BusGroupTitle>Entradas</BusGroupTitle>
                    <BusGroup>
                        <Bus>
                            <BusTitle>Atril</BusTitle>
                            <BusControl>
                                <SliderContainer>
                                    <StyledSlider vertical />
                                </SliderContainer>
                                <Button  type="default" icon={<AudioMutedOutlined />} />
                                <Button onClick={()=>meetingControlApi.setObsScene("Atril")} type="primary" icon={<VideoCameraOutlined />} />

                            </BusControl>
                        </Bus>


                    </BusGroup>
                </BusGroupContainer>
                 */}


                {getPresetsGroups().map((presetsGroup) =>
                    <PresetsGroupContainer key={presetsGroup[0].tag}>
                        <PresetsGroupTitle>{presetsGroup[0].tag}</PresetsGroupTitle>
                        <PresetsGroup>
                            {presetsGroup.map((preset) => <PresetButton  key={`${preset.name}_${preset.tag}`} active={preset == activePreset} onClick={() => activatePreset(preset)}>{preset.name}</PresetButton>)}
                            </PresetsGroup>
                    </PresetsGroupContainer>)
                }



            </Container>
        </MainLayout>
  );
}

export default MeetingControlPage;