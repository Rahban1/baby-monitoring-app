import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#6B7280', className }) => {
  const iconSize = size;
  
  const icons: { [key: string]: any } = {
    // Baby & Family Icons
    'baby': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.3 14.3 9 13.5 9H10.5C9.7 9 9 8.3 9 7.5V6.5L3 7V9L9 8.5V9.5C9 10.3 9.7 11 10.5 11H13.5C14.3 11 15 10.3 15 9.5V8.5L21 9ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8ZM12 14C15.3 14 18 16.7 18 20V22H6V20C6 16.7 8.7 14 12 14Z" fill={color}/>
      </Svg>
    ),
    
    // Notification & Monitoring Icons
    'bell': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20H10Z" fill={color}/>
      </Svg>
    ),
    
    'monitor': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V6C22 4.9 21.1 4 20 4ZM20 16H4V6H20V16ZM16 20H8V18H16V20Z" fill={color}/>
      </Svg>
    ),
    
    'sleep': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12.34 2.02C6.59 1.82 2 6.42 2 12C2 17.58 6.59 22.18 12.34 21.98C17.67 21.8 22 17.5 22 12C22 6.5 17.67 2.2 12.34 2.02ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10C8 10.55 8.45 11 9 11S10 10.55 10 10C10 8.9 10.9 8 12 8S14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 9.45 9.55 9 9 9S8 9.45 8 10C8 7.79 9.79 6 12 6Z" fill={color}/>
      </Svg>
    ),
    
    // Device & Tech Icons
    'device-mobile': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19ZM15 7H9V9H15V7ZM15 11H9V13H15V11ZM15 15H9V17H15V15Z" fill={color}/>
      </Svg>
    ),
    
    'wifi': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M1 9L3 11C7.97 6.03 16.03 6.03 21 11L23 9C16.93 2.93 7.07 2.93 1 9ZM9 17L12 20L15 17C13.34 15.34 10.66 15.34 9 17ZM5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.14 8.87 9.14 5 13Z" fill={color}/>
      </Svg>
    ),
    
    'battery': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M15.67 4H14V2C14 1.45 13.55 1 13 1H11C10.45 1 10 1.45 10 2V4H8.33C7.6 4 7 4.6 7 5.33V18.67C7 19.4 7.6 20 8.33 20H15.67C16.4 20 17 19.4 17 18.67V5.33C17 4.6 16.4 4 15.67 4ZM15 18H9V6H15V18Z" fill={color}/>
      </Svg>
    ),
    
    'thermometer': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C7.79 14.16 7 15.71 7 17.5C7 20.54 9.46 23 12.5 23S18 20.54 18 17.5C18 15.71 17.21 14.16 16 13ZM12 21C10.62 21 9.5 19.88 9.5 18.5C9.5 17.12 10.62 16 12 16S14.5 17.12 14.5 18.5C14.5 19.88 13.38 21 12 21ZM11 8H13V6H11V8ZM11 12H13V10H11V12Z" fill={color}/>
      </Svg>
    ),
    
    // Auth & Security Icons
    'lock': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 3C13.66 3 15 4.34 15 6V8H9V6C9 4.34 10.34 3 12 3ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15S13.1 13 12 13S10 13.9 10 15S10.9 17 12 17Z" fill={color}/>
      </Svg>
    ),
    
    'google': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
        <Path d="M12 23C15.24 23 17.955 21.93 19.28 20.335L15.725 17.575C14.735 18.235 13.39 18.68 12 18.68C8.865 18.68 6.22 16.575 5.405 13.78H1.765V16.66C3.08 19.255 7.31 23 12 23Z" fill="#34A853"/>
        <Path d="M5.405 13.78C5.205 13.13 5.09 12.44 5.09 11.72S5.205 10.31 5.405 9.66V6.78H1.765C1.03 8.14 0.64 9.66 0.64 11.22S1.03 14.3 1.765 15.66L5.405 13.78Z" fill="#FBBC05"/>
        <Path d="M12 4.32C13.39 4.32 14.735 4.765 15.725 5.425L19.28 2.665C17.955 1.07 15.24 0 12 0C7.31 0 3.08 3.745 1.765 6.78L5.405 9.66C6.22 6.865 8.865 4.32 12 4.32Z" fill="#EA4335"/>
      </Svg>
    ),
    
    'apple': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill={color}/>
      </Svg>
    ),
    
    'email': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill={color}/>
      </Svg>
    ),
    
    // Action Icons
    'plus': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color}/>
      </Svg>
    ),
    
    'settings': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12 15.5C14.21 15.5 16 13.71 16 11.5S14.21 7.5 12 7.5S8 9.29 8 11.5S9.79 15.5 12 15.5ZM19.43 12.98C19.47 12.66 19.5 12.34 19.5 12S19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.22 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12S4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C9.52 15.5 7.5 13.48 7.5 11S9.52 6.5 12 6.5S16.5 8.52 16.5 11S14.48 15.5 12 15.5Z" fill={color}/>
      </Svg>
    ),
    
    'chart': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill={color}/>
      </Svg>
    ),
    
    'arrow-left': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill={color}/>
      </Svg>
    ),
    
    'check': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill={color}/>
      </Svg>
    ),
    
    'lightbulb': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20H10Z" fill={color}/>
      </Svg>
    ),
    
    'search': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z" fill={color}/>
      </Svg>
    ),
    
    'link': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12S4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12S18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12S19.76 7 17 7Z" fill={color}/>
      </Svg>
    ),
    
    'clock': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22S22 17.5 22 12S17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4S20 7.59 20 12S16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill={color}/>
      </Svg>
    ),
    
    'logout': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill={color}/>
      </Svg>
    ),
    
    'bluetooth': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M17.71 7.71L12 2H11V9.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71ZM13 5.83L14.88 7.71L13 9.59V5.83ZM14.88 16.29L13 18.17V14.41L14.88 16.29Z" fill={color}/>
      </Svg>
    ),
    
    'location': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill={color}/>
      </Svg>
    ),
    
    'devices': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M4 6H20V4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20V18H4V6ZM20 8H4V18H20V8ZM16 10H18V12H16V10ZM16 13H18V15H16V13ZM13 10H15V12H13V10ZM13 13H15V15H13V13ZM10 10H12V12H10V10ZM10 13H12V15H10V13Z" fill={color}/>
      </Svg>
    ),
    
    'shield': (
      <Svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <Path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 21C7.5 19.5 5 15.5 5 11V6.3L12 3.19L19 6.3V11C19 15.5 16.5 19.5 12 21Z" fill={color}/>
      </Svg>
    )
  };

  const IconComponent = icons[name];
  
  if (!IconComponent) {
    return <View style={{ width: iconSize, height: iconSize }} />;
  }

  return (
    <View className={className} style={{ width: iconSize, height: iconSize }}>
      {IconComponent}
    </View>
  );
};

export default Icon;
