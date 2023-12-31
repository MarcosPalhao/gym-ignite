import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Entypo} from '@expo/vector-icons';


type Props = TouchableOpacityProps & {

};

export function ExerciseCard({...rest}: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image 
                    source={{ uri: 'https://blog.ciaathletica.com.br/wp-content/uploads/2023/05/Cia-Athletica-Remada-curvada-Autores-Grupo-S2-Marketing-Freepik-1200x800.jpg' }}
                    alt="Imagem do Exercicio"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize="lg" color="white">
                        Remada curvada
                    </Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
                        3 seris x 12 repetições
                    </Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
            </HStack>
        </TouchableOpacity>
    );
}