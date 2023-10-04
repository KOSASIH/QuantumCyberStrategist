import org.bouncycastle.pqc.crypto.mceliece.*;

public class CodeBasedEncryptionExample {
    public static void main(String[] args) {
        try {
            // Generate key pair
            McElieceKeyPairGenerator keyPairGenerator = new McElieceKeyPairGenerator();
            keyPairGenerator.init(new McElieceParameters());
            AsymmetricCipherKeyPair keyPair = keyPairGenerator.generateKeyPair();
            
            // Get public and private keys
            McEliecePublicKeyParameters publicKey = (McEliecePublicKeyParameters) keyPair.getPublic();
            McEliecePrivateKeyParameters privateKey = (McEliecePrivateKeyParameters) keyPair.getPrivate();
            
            // Encrypt a message
            String message = "Hello, World!";
            byte[] messageBytes = message.getBytes();
            McElieceCipher cipher = new McElieceCipher();
            cipher.init(true, publicKey);
            byte[] ciphertext = cipher.messageEncrypt(messageBytes);
            
            // Decrypt the ciphertext
            cipher.init(false, privateKey);
            byte[] decryptedBytes = cipher.messageDecrypt(ciphertext);
            String decryptedMessage = new String(decryptedBytes);
            
            // Print the decrypted message
            System.out.println("Decrypted message: " + decryptedMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
