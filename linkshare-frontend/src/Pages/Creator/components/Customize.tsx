import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Background from './CustomizeTabs/Background';
import AvatarTab from './CustomizeTabs/AvatarTab';
import NameTab from './CustomizeTabs/NameTab';
import DescriptionTab from './CustomizeTabs/DescriptionTab';
import LinksWithIconsTab from './CustomizeTabs/LinksWithIconsTab';



function Customize() {

    const tabStyle = 'p-2 border border-[#AC74E4] rounded-md  text-center  max-w-xs text-xs md:w-40'
    const tabPanelStyle = '"h-[60vh] overflow-y-scroll"'

    return (<section className="bg-[#FFFF]  shadow-lg p-4 rounded-md   md:h-auto md:w-3/4 m-4 flex">
        <div className='w-full flex flex-col  gap-8 '>
            <h1 className=" text-3xl font-semibold ">Customize your page</h1>
            <Tabs>
                <TabList className="flex flex-col items-center md:flex-wrap md:flex-row gap-8 w-full justify-center">
                    <Tab className={tabStyle}>Background</Tab>
                    <Tab className={tabStyle}>Avatar</Tab>
                    <Tab className={tabStyle}>Name</Tab>
                    <Tab className={tabStyle}>Description</Tab>
                    <Tab className={tabStyle}>Links with icons</Tab>
                    <Tab className={tabStyle}>Links Box</Tab>
                    <Tab className={tabStyle}>Footer</Tab>
                </TabList>

                <TabPanel className={tabPanelStyle}>
                    <Background />
                </TabPanel>
                <TabPanel className={tabPanelStyle}>
                    <AvatarTab />
                </TabPanel>
                <TabPanel className={tabPanelStyle}>
                    <NameTab />
                </TabPanel>
                <TabPanel className={tabPanelStyle}>
                    <DescriptionTab />
                </TabPanel>
                <TabPanel className={tabPanelStyle}>
                    <LinksWithIconsTab />
                </TabPanel>
                <TabPanel className={tabPanelStyle}>
                    <LinksWithIconsTab />
                </TabPanel>
                <TabPanel className={tabPanelStyle}>
                    <LinksWithIconsTab />
                </TabPanel>
            </Tabs>
        </div>
    </section>)
}

export default Customize