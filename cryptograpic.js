import java.security.SecureRandom;
import java.util.Arrays;

public class CodeBasedEncryption {
    private static final int KEY_SIZE = 256; // Size of the encryption key in bits

    public static void main(String[] args) {
        // Generate a random encryption key
        byte[] key = generateKey();

        // Encrypt and decrypt a message using the key
        String message = "Hello, World!";
        byte[] ciphertext = encrypt(message, key);
        String decryptedMessage = decrypt(ciphertext, key);

        // Print the original message and decrypted message
        System.out.println("Original Message: " + message);
        System.out.println("Decrypted Message: " + decryptedMessage);
    }

    private static byte[] generateKey() {
        // Generate a random key using a secure random number generator
        SecureRandom random = new SecureRandom();
        byte[] key = new byte[KEY_SIZE / 8];
        random.nextBytes(key);
        return key;
    }

    private static byte[] encrypt(String message, byte[] key) {
        // Convert the message to bytes
        byte[] plaintext = message.getBytes();

        // XOR the plaintext with the key to encrypt the message
        byte[] ciphertext = new byte[plaintext.length];
        for (int i = 0; i < plaintext.length; i++) {
            ciphertext[i] = (byte) (plaintext[i] ^ key[i % key.length]);
        }

        return ciphertext;
    }

    private static String decrypt(byte[] ciphertext, byte[] key) {
        // XOR the ciphertext with the key to decrypt the message
        byte[] plaintext = new byte[ciphertext.length];
        for (int i = 0; i < ciphertext.length; i++) {
            plaintext[i] = (byte) (ciphertext[i] ^ key[i % key.length]);
        }

        // Convert the decrypted bytes back to a string
        return new String(plaintext);
    }
}
