import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import {
  FuenteExternaTipo,
  InicioStackParamList,
  MiDexStackParamList,
} from '../../navigation/types';

type FuenteExternaRouteProp = RouteProp<
  InicioStackParamList | MiDexStackParamList,
  'FuenteExternaWebView'
>;

function esUrlWikipedia(url: string): boolean {
  try {
    const { hostname } = new URL(url);

    return hostname === 'wikipedia.org' || hostname.endsWith('.wikipedia.org');
  } catch {
    return false;
  }
}

function esUrlPermitida(url: string, fuente: FuenteExternaTipo): boolean {
  if (fuente === 'wikipedia') {
    return esUrlWikipedia(url);
  }

  return false;
}

export default function FuenteExternaWebView() {
  const route = useRoute<FuenteExternaRouteProp>();
  const { url, fuente } = route.params;

  const urlPermitida = esUrlPermitida(url, fuente);
  const [isLoading, setIsLoading] = useState(urlPermitida);
  const [hasError, setHasError] = useState(!urlPermitida);

  if (hasError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitulo}>
          No se pudo cargar la información
        </Text>

        <Text style={styles.errorTexto}>
          {urlPermitida
            ? 'Comprueba tu conexión e inténtalo de nuevo.'
            : 'El enlace no es válido o no está permitido.'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        originWhitelist={['https://*']}
        onShouldStartLoadWithRequest={(request) =>
          esUrlPermitida(request.url, fuente)
        }
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        onHttpError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />

      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#4a7c59" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  webview: {
    flex: 1,
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },

  errorTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },

  errorTexto: {
    fontSize: 16,
    color: '#444444',
    textAlign: 'center',
    lineHeight: 24,
  },
});
