import numpy as np
import matplotlib.pyplot as plt

def exponential_growth(P0, k, t):
    """Calculate exponential growth. P0 is the initial amount, k is the growth rate, and t is time."""
    return P0 * np.exp(k * t)

def exponential_decay(P0, k, t):
    """Calculate exponential decay. P0 is the initial amount, k is the decay rate, and t is time."""
    return P0 * np.exp(-k * t)

def decay_constant_from_half_life(T):
    """Calculate decay constant k from a given half-life T."""
    return np.log(2) / T

# Example usage:
# Parameters
initial_amount = 100  # Initial quantity of the substance
growth_rate = 0.05    # Growth rate for exponential growth
decay_half_life = 10  # Half-life for decay in the same time units as t
time = np.linspace(0, 50, 100)  # Time from 0 to 50 in 100 steps

# Calculate decay constant from half-life
decay_rate = decay_constant_from_half_life(decay_half_life)

# Calculate growth and decay
growth = exponential_growth(initial_amount, growth_rate, time)
decay = exponential_decay(initial_amount, decay_rate, time)

# Plotting
plt.figure(figsize=(10, 5))
plt.plot(time, growth, label='Exponential Growth')
plt.plot(time, decay, label='Exponential Decay')
plt.title('Exponential Growth and Decay')
plt.xlabel('Time')
plt.ylabel('Amount')
plt.legend()
plt.grid(True)
plt.show()
